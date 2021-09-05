// Model imports
const Bookmark = require("../bookmark/bookmark.model.js");
const Folder = require("../folder/folder.model.js");

// desc: Search folders and bookmarks
// GET /search/content?term=search-term
exports.getSearchData = async (req, res, next) => {
  const getAggregates = term => {
    const aggregate = [
      {
        $search: {
          text: {
            query: term,
            path: ["title", "description", "meta.title", "meta.description"],
            fuzzy: { maxEdits: 1 }
          },
          highlight: {
            path: ["title", "description", "meta.title", "meta.description"]
          }
        }
      },
      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          meta: 1,
          parentFolder: 1,
          url: 1,
          score: { $meta: "searchScore" },
          highlights: { $meta: "searchHighlights" }
        }
      },
      { $limit: 10 }
    ];

    return Promise.all([
      Folder.aggregate(aggregate),
      Bookmark.aggregate(aggregate)
    ]);
  };

  if (!req.query.term)
    return next({
      message: "ERR_SEARCH_TERM_REQUIRED"
    });

  try {
    const [folders, bookmarks] = await getAggregates(req.query.term);

    res.json({
      foldersCount: folders.length,
      folders,
      bookmarksCount: bookmarks.length,
      bookmarks
    });
  } catch (error) {
    console.warn("Get Search error: ", error.message);
    next(error);
  }
};

// desc: Search suggestions/autocomplete
// GET /search/suggestion?term=search-term
exports.getSuggestionData = async (req, res, next) => {
  const getAggregates = term => {
    const project = {
      $project: {
        _id: 1,
        title: 1,
        description: 1,
        path: 1,
        meta: {
          title: 1,
          url: 1
        },
        url: 1
      }
    };

    const limit = { $limit: 5 };

    const title = {
      $search: {
        autocomplete: {
          query: term,
          path: "title",
          fuzzy: { maxEdits: 1 }
        }
      }
    };

    const metaTitle = {
      $search: {
        autocomplete: {
          query: term,
          path: "meta.title",
          fuzzy: { maxEdits: 1 }
        }
      }
    };

    return Promise.all([
      Folder.aggregate([title, project, limit]),
      Bookmark.aggregate([title, project, limit]),
      Folder.aggregate([metaTitle, project, limit]),
      Bookmark.aggregate([metaTitle, project, limit])
    ]);
  };

  if (!req.query.term)
    return next({
      message: "ERR_SEARCH_TERM_REQUIRED"
    });

  try {
    const result = await getAggregates(req.query.term);

    const folders = [...result[0], ...result[2]];
    const bookmarks = [...result[1], ...result[3]];

    res.json({
      foldersCount: folders.length,
      folders,
      bookmarksCount: bookmarks.length,
      bookmarks
    });
  } catch (error) {
    console.warn("Get Suggestion error: ", error.message);
    next(error);
  }
};

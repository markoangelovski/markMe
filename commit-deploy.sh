#!/bin/bash

echo "Running git add ."
git add .

echo "Running git commit..."
echo "Enter commit description:"
read description

echo "Pushing to Azure DevOps remote repository..."
git commit -m "$description"

echo "Pushing to Azure DevOps remote repository..."
git push -u azure-devops master

echo "Pushing to Github remote repository..."
git push -u github-prod master
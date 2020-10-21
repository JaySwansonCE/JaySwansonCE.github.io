#!/bin/sh

setup_git() {
  # git config --global user.name ${TRAVIS_LOGIN}
  # git config --global user.name ${TRAVIS_PASS}
  cd swanjson/swanjson.github.io/assets
  git clone https://github.com/swanjson/resumes
  # https://${TRAVIS_LOGIN}:${TRAVIS_PASS}@github.com/swanjson/resumes.git
  # git submodule add https://github.com/swanjson/resumes
}

# commit_website_files() {
#   git checkout -b gh-pages
#   git add . *.html
#   git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
# }

# upload_files() {
#   git remote add origin-pages https://${GH_TOKEN}@github.com/MVSE-outreach/resources.git > /dev/null 2>&1
#   git push --quiet --set-upstream origin-pages gh-pages 
# }

setup_git
# commit_website_files
# upload_files
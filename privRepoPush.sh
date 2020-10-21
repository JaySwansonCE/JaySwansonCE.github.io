#!/bin/sh

setup_git() {
  # git config --global user.name ${TRAVIS_LOGIN}
  # git config --global user.name ${TRAVIS_PASS}
  # cd /home/travis/build/swanjson/swanjson.github.io/assets
  git clone --depth=50 --branch=master https://github.com/swanjson/resumes.git swanjson/swanjson.github.io/src/assets/
  cp swanjson/swanjson.github.io/src/assets/outdoorResume.pdf /home/travis/build/swanjson/swanjson.github.io/src/assets/resumes/
  cp swanjson/swanjson.github.io/src/assets/indoorResume.pdf /home/travis/build/swanjson/swanjson.github.io/src/assets/resumes/
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
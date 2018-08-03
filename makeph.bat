copy .gitmodules.ph .gitmodules
git pull
cd src/app
del local /s/q
rmdir local
git add .
git commit -m "x"
git submodule add --force https://github.com/asahpchoi/ph.git local
git submodule update local
cd ../..

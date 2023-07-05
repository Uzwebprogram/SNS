echo "Switching to branch main"
git checkout kamronbey

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* root@62.217.179.24:/var/www/sns/

echo "Done!"

# git clone https://github.com/liuxy0551/opencc-service.git
git pull origin master
pnpm i
pm2 restart ./pm2/config.json --env production

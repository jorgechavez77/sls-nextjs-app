sam build

sam deploy --no-confirm-changeset

aws s3 rm s3://dev-sls-nextjs-app-static/_next/static --recursive

aws s3 cp tmp/static s3://dev-sls-nextjs-app-static/_next/static --recursive --acl public-read

aws s3 cp tmp/public s3://dev-sls-nextjs-app-static/public --recursive --acl public-read

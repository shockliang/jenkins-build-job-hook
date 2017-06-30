# jenkins-build-job-hook

1. After SVN trigger post-commit batch that will be change the directory to your path.
2. The post-commit batch will using `svnlook` command to retrieve commit paths and create text file by revision that commit successfully.
3. It will pass the path of commit context text file as arguments to build job hook app.
4. App read the file content and get the **first commit path** to find job id. If find the match case that will trigger to build correspond job.

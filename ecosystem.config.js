module.exports = {
    apps: [{
        name: 'faskesku',
        script: 'npm',
        args: 'start',
        cwd: '/www/wwwroot/faskesku.id',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production',
            PORT: 3000
        }
    }]
}

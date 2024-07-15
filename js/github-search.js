function fetchGitHubProfile() {
    const username = document.getElementById('username').value;
    const errorDiv = document.getElementById('error');
    const profileDiv = document.getElementById('profile');

    // 清空错误信息和个人资料信息
    errorDiv.textContent = '';
    profileDiv.style.display = 'none';

    if (!username) {
        errorDiv.textContent = '用户名不能为空';
        return;
    }

    // 构造 GitHub API URL
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('用户不存在或请求失败');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('avatar').src = data.avatar_url;
            document.getElementById('name').textContent = data.name || '未提供';
            document.getElementById('login').textContent = data.login;
            document.getElementById('company').textContent = data.company || '未提供';
            document.getElementById('blog').textContent = data.blog || '未提供';
            document.getElementById('blog').href = data.blog || '#';
            document.getElementById('location').textContent = data.location || '未提供';
            document.getElementById('email').textContent = data.email || '未提供';
            document.getElementById('bio').textContent = data.bio || '未提供';
            document.getElementById('public_repos').textContent = data.public_repos;
            document.getElementById('public_gists').textContent = data.public_gists;
            document.getElementById('followers').textContent = data.followers;
            document.getElementById('following').textContent = data.following;
            document.getElementById('created_at').textContent = new Date(data.created_at).toLocaleDateString();
            document.getElementById('updated_at').textContent = new Date(data.updated_at).toLocaleDateString();
            profileDiv.style.display = 'block';
        })
        .catch(error => {
            errorDiv.textContent = error.message;
        });
}

url = `https://api.dicebear.com/8.x/lorelei/svg?seed=${user.username}`
fetch(url)
    .then(response => response.json())
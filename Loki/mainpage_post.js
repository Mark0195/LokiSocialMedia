function edit_profile(){
    window.location.replace('profile.html')
}
function loadposts(){
    let post_area = document.querySelector('#sent_area')
    let posts = localStorage.getItem('posts');
    if(posts === null){
        posts = []
    }else{
        posts = JSON.parse(posts)
    }
    for(let posts_index in posts){
        let post = posts[posts_index]
        let post_template = document.querySelector('#first_template');
        let clone_template = post_template.content.cloneNode(true);
        clone_template.querySelector('.sto_output').innerText = post['name'];
        clone_template.querySelector('.a_comment').innerText = post['content'];
        let comment_button = clone_template.querySelector('.reply_button');
        let comment_area = clone_template.querySelector('.the_reply')
        for(let comment of post['comments']){
            let comment_clone = second_template.content.cloneNode(true);
            let comment_name_area = comment_clone.querySelector('.storage_output_comment');
            comment_name_area.innerText = comment['name'];
            comment_clone.querySelector('.a_reply').innerText = comment['content'];
            comment_area.appendChild(comment_clone);
        }
        let name = localStorage.getItem('username')
        let comment_input = clone_template.querySelector('.user_input');
        let post_reply = clone_template.querySelector('.the_reply')
        comment_button.addEventListener('click', function(){
            let comment_clone = second_template.content.cloneNode(true);
            let comment_name_area = comment_clone.querySelector('.storage_output_comment');
            comment_name_area.innerText = name;
            comment_clone.querySelector('.a_reply').innerText = comment_input.value;
            post_reply.appendChild(comment_clone);
            let user_response = JSON.parse(localStorage.getItem('posts'));
            let comment_object = {
                "name" : name,
                "content" : comment_input.value
            };
            user_response[posts_index]["comments"].push(comment_object)
            localStorage.setItem('posts', JSON.stringify(user_response))
        })
        post_area.appendChild(clone_template);
    }
}



function main(){
    let button = document.querySelector('#submit')
    button.addEventListener('click', function(){

        let name = localStorage.getItem('username');
        if(name === null){
            name = "Profile";
        }
        let name_area = document.querySelector('#storage_output');
        name_area.innerText = name;
        let comment_send = document.querySelector('#comment');
        let send_area = document.querySelector('#sent_area');
        let post_template = document.querySelector('#first_template');
        let clone_template = post_template.content.cloneNode(true);
        
        let post_reply = clone_template.querySelector('.the_reply');
        let comment_button = clone_template.querySelector('.reply_button')
        let comment_area =  clone_template.querySelector(".user_input");
        let second_template = document.querySelector('#second_template');
        clone_template.querySelector('.sto_output').innerText = name;
        clone_template.querySelector('.a_comment').innerText = comment_send.value;
        sent_area.appendChild(clone_template);

    
        let post_object = {
            "name" : name,
            "content" : comment_send.value,
            "comments" : []
        };
        let posts = localStorage.getItem('posts');
        if(posts === null){
            posts = []
        }else{
            posts = JSON.parse(posts);
        }
        let posts_index = posts.length;
        posts.push(post_object)
        localStorage.setItem('posts', JSON.stringify(posts));

        comment_button.addEventListener('click', function(){
            console.log('hello world')
            let comment_clone = second_template.content.cloneNode(true);
            let comment_name_area = comment_clone.querySelector('.storage_output_comment');
            comment_name_area.innerText = name;
            comment_clone.querySelector('.a_reply').innerText = comment_area.value;
            post_reply.appendChild(comment_clone);
            let user_response = JSON.parse(localStorage.getItem('posts'));
            let comment_object = {
                "name" : name,
                "content" : comment_area.value
            };
            user_response[posts_index]["comments"].push(comment_object)
            localStorage.setItem('posts', JSON.stringify(user_response))
        })
    });
    loadposts();
}
window.addEventListener('load', main)

function stored_user(){
    let output = document.querySelector('#storage_output');
    output.innerText = localStorage.getItem('username');
}
window.addEventListener('load', stored_user);
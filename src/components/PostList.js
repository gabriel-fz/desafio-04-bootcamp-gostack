import React, { Component } from "react";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Fiorese",
          avatar:
            "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    console.log(this.state);

    return (
      <div className="postlist">
        {this.state.posts.map(post => (
          <div className="post">
            <div key={post.id}>
              <div className="post-header">
                <img className="avatar" src={post.author.avatar} />
                <div className="details">
                  <span>{post.author.name}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-comments">
              <div className="divider" />
              {post.comments.map(comment => (
                <div key={comment.id} className="comment">
                  <img className="avatar" src={comment.author.avatar} />
                  <p>
                    <span>{comment.author.name}</span>
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostList;

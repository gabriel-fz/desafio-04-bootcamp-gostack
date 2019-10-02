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
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar:
            "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza? Estou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar:
                "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar:
                "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"
            },
            content:
              "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Gabriel Lisboa",
          avatar:
            "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza? Estou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar:
                "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar:
                "https://www.verasport.pl/pub/skin/default-skin/img/avatar.png"
            },
            content:
              "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes"
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

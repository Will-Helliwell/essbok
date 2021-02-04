class PostsController < ApplicationController

  def create
    @user = current_user
    @post = @user.posts.create(post_params)

    redirect_to posts_url
  end
  def create_API
    data_json = JSON.parse request.body.read
    p 'data_json'
    p data_json
    @post = Post.new(data_json)
    @post.save
      end

  def index
    if !session[:user_id]
      redirect_to root_path
    end

    @post = Post.new
    @posts = Post.all
  end

  def index_API
    @post = Post.new
<<<<<<< HEAD
    @posts = Post.includes(:user).order(created_at: :desc)
=======
    sql = 'SELECT posts.*, users.username
    FROM posts
    INNER JOIN users
    ON posts.user_id = users.id'
    @posts = ActiveRecord::Base.connection.execute(sql)
json_object = {
  "posts"=> []
}
      @posts.each do |post|
      json_subnode = {
        "id": post['id'],
        "message": post['message'],
        "created_at": post['created_at'],
        "updated_at": post['updated_at'],
        "username": post['username']
      }
      json_object["posts"]<< json_subnode
      end
    render json: @posts
>>>>>>> removed render from posts controller
  end

  private

  def post_params
    params.require(:post).permit(:message)
  end
end

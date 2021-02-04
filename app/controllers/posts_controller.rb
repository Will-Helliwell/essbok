class PostsController < ApplicationController

  def create
    @user = current_user
    @post = @user.posts.create(post_params)
    redirect_to posts_url
  end

  def index
    @post = Post.new
    @posts = Post.all
  end

  def index_API
    p "iam in the index_api"
    @post = Post.new
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
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
  end

  private

  def post_params
    params.require(:post).permit(:message)
  end
end

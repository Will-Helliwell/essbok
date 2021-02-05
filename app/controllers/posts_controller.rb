class PostsController < ApplicationController

  def create
    @user = current_user
    @post = @user.posts.create(post_params)
    redirect_to posts_url
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
    @posts = Post.includes(:user).order(created_at: :desc)
  end

  private

  def post_params
    params.require(:post).permit(:message)
  end
end

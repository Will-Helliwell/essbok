json.array! @posts do |post|
  json.id post.id
  json.message post.message
  json.created_at post.created_at.strftime("%c")
  json.username post.user.username
end

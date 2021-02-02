require 'bcrypt'

class User < ApplicationRecord
  include BCrypt
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

  has_many :posts

  def password_string
    @password_string
  end

  def password_string=(new_password)
    @password_string = new_password

    if @password_string.present?
      self.password = Password.create(new_password)
    end
  end

  validates :email,
    presence: true,
    length: { minimum: 10, maximum: 255 },
    format: { with: VALID_EMAIL_REGEX },
    uniqueness: { case_sensitive: false } #to avoid email duplication
  validates :password_string,
    presence: true,
    length: { minimum: 6, maximum: 10 }
end

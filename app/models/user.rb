require 'bcrypt'

class User < ApplicationRecord
  include BCrypt
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

  has_many :posts

  def password_string
    @password_string ||= if self.password.present?
      Password.new(self.password)
    end
  end

  def password_string=(new_password)
    @password_string = if new_password.present?
      Password.create(new_password)
      self.password = @password_string
    else
      self.password = nil
    end
  end

  validates :email,
    presence: true,
    length: { minimum: 10, maximum: 255 },
    format: { with: VALID_EMAIL_REGEX, message: "email address invalid, please try again" },
    uniqueness: { case_sensitive: false } #to avoid email duplication
  validates :password_string,
    presence: true,
    length: { minimum: 6, maximum: 10 }
end

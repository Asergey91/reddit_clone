# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
for a in 1..5 do
    Comment.create!({author: 'Joe', body: 'Cool post!', upvotes: 3, post_id: a})
    Comment.create!({author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 1, post_id: a})
    Comment.create!({author: 'Alex', body: 'Upvote me please!', upvotes: 85, post_id: a})
    Comment.create!({author: 'John', body: 'Thats some good stuff', upvotes: 4, post_id: a})
    Comment.create!({author: 'Jullie', body: 'Im a girl', upvotes: 6, post_id: a})
end
  
  
Post.create!({title: 'Homepage of the internet', upvotes: 5, link: 'http://google.com'})
Post.create!({title: 'Im ripping this off', upvotes: 2, link: 'http://reddit.com'})
Post.create!({title: 'Post without a link', upvotes: 15})
Post.create!({title: 'Fighting games are awesome', upvotes: 9, link: 'http://shoryuken.com'})
Post.create!({title: 'Another post without a link', upvotes: 4})
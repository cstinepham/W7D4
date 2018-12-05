json.array! @guests do |guest|
  json.partial! 'api/guests/guest', guest: guest
end

# json.array! @guests, :name, :age, :favorite_color

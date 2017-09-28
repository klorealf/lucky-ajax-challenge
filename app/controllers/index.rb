get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  @die = Die.new(params[:sides].to_i)
  if request.xhr? #if the request is an Ajax request
    erb :_roll, layout: false
    #@die.roll.to_s # Have to change this to a string because sinatra will think this integer is a status code. Don't need this due to the _roll and layout:false
  else
    erb :index  # HINT: what does this do? what should we do instead?
  end
end

get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  @die = Die.new(params[:sides].to_i)
  
  if request.xhr?
    # fyi this will also send back appropriate HTML with our response:
    # "<div class='die'><span class='roll'>#{@die.roll}</span></div>"
    
    # but we want to follow the MVC pattern,
    # so we put our view code in a separate file and call it here:
    # notice we add the "layout: false" option to avoid sending
    # the layout code back also (which is Sinatra's default behavior)
    erb :_roll, layout: false
  else
    erb :index
  end
end

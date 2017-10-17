get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  @die = Die.new(params[:sides].to_i)
  if request.xhr?
    erb :_roll , layout: false
  else
    erb :index
  end
end

require 'sinatra'

get '/' do
  'Hello World!'
end

get '/divide_by_zero' do
  1/0
end

get '/uncaught_exception' do
  raise 'this exception goes to sentry'
end

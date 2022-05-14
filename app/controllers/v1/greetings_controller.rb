class V1::GreetingsController < ApplicationController
  def index
    render json: { :greeting => [
      {
        :name => 'Hello Sam',
        :message => 'Welcome to the API'
      }
    ] }.to_json
  end
end

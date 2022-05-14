class V1::GreetingsController < ApplicationController
  def index
    @greetings =   Greeting.all.sample(1)
    render json: { :greeting => [
      {
        message: @greetings[0].greeting
      }
    ] }.to_json
  end
end

class Api::V1::GreetingsController < ApplicationController
  def index
    greeting = Greeting.all.sample(1).first
    render json: greeting
  end
end

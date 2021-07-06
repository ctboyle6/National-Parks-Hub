module Api
  module V1
    class ParksController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]
      
      def index
        parks = Park.all

        render json: ParkSerializer.new(parks, options).serialized_json
      end

      def show
        park = Park.find_by(park_code: params[:park_code])

        render json: ParkSerializer.new(park, options).serialized_json
      end

      # def create
      #   park = Park.new(park_params)

      #   if park.save
      #     render json: ParkSerializer.new(park).serialized_json
      #   else
      #     render json: { error: park.errors.messages }, status: 422
      #   end
      # end

      # def update
      #   park = Park.find_by(park_code: params[:park_code])

      #   if park.update(park_params)
      #     render json: ParkSerializer.new(park, options).serialized_json
      #   else
      #     render json: { error: park.errors.messages }, status: 422
      #   end
      # end

      # def destroy
      #   park = Park.find_by(park_code: params[:park_code])

      #   if park.destroy
      #     head :no_content
      #   else
      #     render json: { error: park.errors.messages }, status: 422
      #   end
      # end

      private

      def park_params
        params.require(:park).permit(:name, :latitude, :longitude, :park_code)
      end

      def options
        @options ||= { include: %i[reviews] }
      end
    end
  end
end

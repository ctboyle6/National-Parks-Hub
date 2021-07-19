module Api
  module V1
    class ReviewsController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index]
      skip_before_action :verify_authenticity_token, only: %i[create destroy]

      def index
        reviews = park.reviews

        if reviews
          render json: ReviewSerializer.new(reviews).serialized_json
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end
      
      def create
        review = Review.new(review_params)
        review.park = park

        if review.save!
          render json: ReviewSerializer.new(review).serialized_json
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      def destroy
        review = Review.find(params[:id])

        if review.destroy
          flash[:success] = 'Review was successfully deleted'
          head :no_content
        else
          flash[:error] = 'Something went wrong'
          render json: { error: review.errors.messages }, status: 422
        end
      end

      private

      def park
        @park ||= Park.find_by(park_code: params[:park_park_code])
      end

      def review_params
        params.require(:review).permit(:title, :description, :rating, :park_id)
      end
    end
  end
end

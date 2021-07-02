module Api
  module V1
    class ReviewsController < ApplicationController
      def index
        reviews = park.first.reviews

        if reviews
          render json: ReviewSerializer.new(reviews).serialized_json
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end
      
      def create
        review = park.reviews.new(review_params)

        if review.save
          render json: ReviewSerializer.new(review).serialized_json
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      def destroy
        review = Review.find_by(params[:id])

        if review.destroy
          head :no_content
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      private

      def park
        @park ||= Park.where(park_code: params[:park_park_code])
      end

      def review_params
        params.require(:review).permit(:title, :description, :rating, :park_id)
      end
    end
  end
end

module Api
  module V1
    class ReviewsController < ApplicationController
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
        @park ||= Park.find(params[:park_id])
      end

      def review_params
        params.require(:review).permit(:title, :description, :rating, :park_id)
      end
    end
  end
end

# frozen_string_literal: true

module Api
  module V1
    class SecuredController < ApplicationController
      # before_action部分の追加によって、認証済みの場合のみアクセス可能なコントローラーとなる
      before_action :authenticate_user
      def index
        render json: {
          message: "ID: #{current_user.id}, SUB: #{current_user.sub}"
        }
      end
    end
  end
end

class QuestionsController < ApplicationController

	def index 
		@questions = Question.all

		respond_to do |format|
			format.html
			format.json { render json: @questions.to_json }
		end
	end

  # GET /questions/1
  # GET /questions/1.json
  def show
  	@question = Question.find(params[:id])

  	respond_to do |format|
  		format.html
  		format.json { render json: @question.to_json }
  	end
  end

  # GET /questions/new
  def new
  	@question = Question.new
  end

  # GET /questions/1/edit
  def edit
  end

  # questions /questions
  # questions /questions.json
  def create
  	@question = Question.new(questions_params)

  	respond_to do |format|
  		if @question.save
  			format.html { redirect_to @question, notice: 'question was successfully created.' }
  			format.json { render json: @question.to_json }
  		else
  			format.html { render action: 'new' }
  			format.json { render json: @question.errors, status: :unprocessable_entity }
  		end
  	end
  end

  # PATCH/PUT /questions/1
  # PATCH/PUT /questions/1.json
  def update
  	@questions = Question.find(params[:id])
  	respond_to do |format|
  		if @questions.update(questions_params)
  			format.html { redirect_to @questions, notice: 'questions was successfully updated.' }
  			format.json { head :no_content }
  		else
  			format.html { render action: 'edit' }
  			format.json { render json: @questions.errors, status: :unprocessable_entity }
  		end
  	end
  end

  # DELETE /questions/1
  # DELETE /questions/1.json
  def destroy
  	@questions.destroy
  	respond_to do |format|
  		format.html { redirect_to questions_url }
  		format.json { head :no_content }
  	end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def questions_params
    	params.require(:questions).permit(:title, :content, :id, :in_stock, :created_at, :updated_at)
    end
end

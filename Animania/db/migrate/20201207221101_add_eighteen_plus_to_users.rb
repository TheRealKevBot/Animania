class AddEighteenPlusToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :eighteen_plus, :boolean
  end
end

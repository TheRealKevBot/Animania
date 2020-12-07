class AddMalIdToFavorites < ActiveRecord::Migration[6.0]
  def change
    add_column :favorites, :mal_id, :integer
  end
end

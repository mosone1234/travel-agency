class CreateServices < ActiveRecord::Migration[6.0]
  def change
    create_table :services do |t|
      t.string :name
      t.decimal :fare
      t.string :dept_city
      t.string :arrival_city
      t.boolean :no_passengers
      t.date :dept_date
      t.datetime :dept_time

      t.timestamps
    end
  end
end

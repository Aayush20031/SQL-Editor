# Architecture Diagram

## Components Overview

- **App**
  - Central component that holds the state and manages the flow of data.
  
- **Buttons**
  - Connected to `SqlEditor` for executing queries and resetting.
  
- **PredefinedQuery**
  - Connected to `SqlEditor` for setting predefined queries.
  
- **SqlEditor**
  - Connected to `Buttons` for query execution and to `Table` for displaying results.
  
- **Table**
  - Connected to `GetTableInfo` for fetching data and displaying it.
  
- **DataDraw**
  - Positioned alongside `Table` for data visualization.
  
- **GetTableInfo**
  - Connected to `Table` for providing data based on user queries.

## Relationships
- `App` -> `Buttons`, `PredefinedQuery`, `SqlEditor`, `Table`, `DataDraw`
- `Buttons` <-> `SqlEditor`
- `SqlEditor` <-> `Table`
- `Table` <-> `GetTableInfo`

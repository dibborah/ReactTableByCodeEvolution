export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'// accessor associate each column with the rows of data
    },
    {
        Header: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header: 'Date Of Birth',
        accessor: "date_of_birth"
    },
    {
        Header: 'Country',
        accessor: 'country'
    },
    {
        Header: 'Phone',
        accessor: 'phone'
    },
]

// In the column age and email not picked intentionally
// Just to showcase that we need not pick all the data from the database to display them in the react table
// We can choose which data to pick from

// #If a column data is left out from this COLUMNS array that column data won't get displayed in the final UI 
// As Simple As That

// To create React Table

// 1. Get the DATA
// 2. Create the COLUMN Array
// 3. Create a Table Instance
// 4. Create a Table HTML and CSS
// 5. Link the Table component(HTML and CSS) with the Table Instance

// # useTable recommends to memoize the data 
// # In the step 5 we will use the tableInstance with the JSX to render all the necessary UI

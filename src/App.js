import './App.css';
import BasicTable from './components/BasicTable';
import ColumnHiding from './components/ColumnHiding';
import ColumnOrder from './components/ColumnOrder';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import RowSelection from './components/RowSelection';
import SortingTable from './components/SortingTable';

function App() {
  return (
    <div className="App">
      {/* <SortingTable></SortingTable> */}
      {/* <PaginationTable></PaginationTable> */}
      <RowSelection></RowSelection>
      <hr style={{"border": "10px solid black"}}/>
      <ColumnHiding></ColumnHiding>
      {/* <ColumnOrder></ColumnOrder> */}
      {/* <FilteringTable></FilteringTable> */}
    </div>
  );
}

export default App;

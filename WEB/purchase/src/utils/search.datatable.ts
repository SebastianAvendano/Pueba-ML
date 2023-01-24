import { NzTableComponent } from 'ng-zorro-antd/table';

export const getPropsFiltersTable = (key: string) => ({
  search: (value: string, tableRef: any): void => {
    tableRef.data = tableRef.nzData.filter((item: any) => {
      if(typeof item[key] == 'string'){
        return item[key].toLocaleLowerCase().includes(value.toLocaleLowerCase());
      }
    });
  },
  reset: (
    element: HTMLInputElement,
    index: number,
    componentRef: any,
    tableRef: NzTableComponent<any>
  ): void => {
    element.value = '';
    componentRef.listOfColumns[index].searchVisible = false;
    tableRef.data = tableRef.nzData;
  },
});
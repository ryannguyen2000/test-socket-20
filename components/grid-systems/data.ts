export const fakeData = {
  mobile: {
    id: 'root',
    thumnail: '_',
    type: 'grid',
    columns: '1',
    gap: '1',
    rows: '1',
    colspan: '1',
    rowspan: '1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    childs: [],
  },
  desktop: {
    id: 'root',
    thumnail: '_',
    type: 'grid',
    columns: '1',
    gap: '1',
    rows: '1',
    colspan: '1',
    rowspan: '1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    childs: [
      {
        colspan: '1',
        rowspan: '1',
        columns: '1',
        rows: '1',
        type: 'flex',
        gap: '1',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        thumbnail: '_',
        id: 'Box-496f0dd8-5215-4483-8940-6510003aa0ff',
        childs: [
          {
            colspan: '1',
            rowspan: '1',
            columns: '1',
            rows: '1',
            type: 'content',
            gap: '1',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            thumbnail: '',
            value: 'text',
            id: 'text$3zzz5hbsq96reoa3b5to6',
            childs: [],
            dataSlice: {
              title: 'Click here',
              isBtnGradient: false,
            },
            style_pc: {
              width: '20',
              height: '10',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
              borderBottomLeftRadius: '8px',
              border: '1px solid black',
              backgroundColor: '#8dec98',
              padding: '5px 5px 5px 5px',
              color: '#ffffff',
            },
            valueRender: {
              jsonPath: '$[0].title',
              apiCall: {
                id: 'dc703fc1-6989-49f6-9ed0-116c627034e3',
                name: 'Get post',
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users/1/todos',
              },
            },
          },
        ],
        valueRender: {
          jsonPath: '',
          apiCall: {
            id: 'dc703fc1-6989-49f6-9ed0-116c627034e3',
            name: 'Get post',
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users/1/todos',
          },
        },
      },
    ],
  },
};

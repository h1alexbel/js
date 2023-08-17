import {deep} from "../src/deep.js";

describe('Test suite for deep.js', () => {
  test('clone is deep', () => {
    expect(
      deep(
        {
          timestamp: 1691485356,
          test: true,
          version: 0.55,
          modules: [
            {
              id: "1",
              name: "test/"
            },
            {
              id: "2",
              name: "src/"
            }
          ]
        }
      )
    ).toStrictEqual(
      {
        modules: {
          0: {
            id: "1",
            name: "test/"
          },
          1: {
            id: "2",
            name: "src/"
          }
        },
        test: true,
        timestamp: 1691485356,
        version: 0.55
      }
    );
  });
});

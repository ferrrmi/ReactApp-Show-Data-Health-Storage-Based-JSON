# React App show data Health Storage based JSON

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Example JSON Data
```json
[
    {
        "Hostname": "client-01",
        "Device 0": "/dev/nvme0",
        "Model ID": "MidasForce SSD 1TB",
        "Serial No": "2022121700616",
        "Revision": "V0323A0",
        "Size": "953869 MB",
        "Interface": "NVMe",
        "Temperature": "50",
        "Highest Temperature": "50",
        "Health": "100",
        "Performance": "100",
        "Power on time": "7 days, 12 hours",
        "Est. lifetime": "more than 1000 days"
    },
    {
        "Hostname": "client-02",
        "Device 0": "/dev/sda",
        "Model ID": "ST500DM009-2DM14C",
        "Serial No": "Z4YGLBHP",
        "Revision": "CC46",
        "Size": "476940 MB",
        "Interface": "S-ATA Gen3, 6 Gbps",
        "Temperature": "35",
        "Highest Temperature": "43",
        "Health": "90",
        "Performance": "100",
        "Power on time": "820 days, 8 hours",
        "Est. lifetime": "more than 1000 days"
    },
    {
        "Hostname": "client-03",
        "Device 0": "/dev/sda",
        "Model ID": "ST500DM009-2DM14C",
        "Serial No": "Z4YGLBHP",
        "Revision": "CC46",
        "Size": "476940 MB",
        "Interface": "S-ATA Gen3, 6 Gbps",
        "Temperature": "35",
        "Highest Temperature": "43",
        "Health": "80",
        "Performance": "100",
        "Power on time": "820 days, 8 hours",
        "Est. lifetime": "more than 1000 days"
    }
]
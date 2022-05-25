import {
    getOptions,
    type ChartOptions,
    type SeriesOptionsType,
    type SeriesPieOptions,
    type TitleOptions,
    type XAxisOptions,
    type YAxisOptions,
} from 'highcharts';
import {
    AVERAGE_SALES,
    QUANTITY,
    REIMBURSEMENT,
    TOTAL_EXPENSE,
    TOTAL_REFUND,
    TOTAL_SALES,
} from '@/misc/const';
import { firstItem, lastItem } from './helpers';

export const createColumnChartOptions = ({
    Currency: currency,
    item,
}: SalesFinanceResponseData) => {
    const xAxis: XAxisOptions = {
        type: 'datetime',
        categories: item.map(({ date }) => date),
        crosshair: true,
    };

    const yAxis: YAxisOptions[] = [
        {
            title: {
                text: `Amount (${currency})`,
                style: {
                    // this could be put in Chart Component
                    color: getOptions()?.colors?.[1],
                },
            },
            labels: {
                style: {
                    // this could be put in Chart Component
                    color: getOptions()?.colors?.[1],
                },
            },
        },
        {
            title: {
                text: 'Quantity (Units)',
                style: {
                    // this could be put in Chart Component
                    color: getOptions()?.colors?.[1],
                },
            },
            labels: {
                style: {
                    // this could be put in Chart Component
                    color: getOptions()?.colors?.[0],
                },
            },
            opposite: true,
        },
    ];

    const series: SeriesOptionsType[] = [
        {
            name: REIMBURSEMENT,
            stack: 0,
            type: 'column',
            tooltip: {
                valuePrefix: currency,
            },
            data: item.map(({ reimbursement }) => reimbursement),
        },
        {
            name: TOTAL_SALES,
            type: 'column',
            stack: 0,
            tooltip: {
                valuePrefix: currency,
            },
            data: item.map(({ totalSales }) => totalSales),
        },
        {
            name: TOTAL_REFUND,
            type: 'column',
            stack: 1,
            tooltip: {
                valuePrefix: currency,
            },
            // There's no totalRefund prop in the api data. So i treat refund as totalRefund
            data: item.map(({ refund }) => refund),
        },
        {
            name: TOTAL_EXPENSE,
            type: 'column',
            stack: 1,
            tooltip: {
                valuePrefix: currency,
            },
            data: item.map(({ totalExpenses }) => totalExpenses),
        },
        {
            name: QUANTITY,
            type: 'spline',
            yAxis: 1,
            data: item.map(({ itemQuantity }) => itemQuantity),
        },
        {
            name: AVERAGE_SALES,
            type: 'column',
            tooltip: {
                valuePrefix: currency,
            },
            data: item.map(({ itemQuantity }) => itemQuantity),
        },
    ];

    const title: TitleOptions = {
        text: 'Sales & Finance',
        align: 'left',
    };

    // I guess it alreay sorted
    // const dates = item.sort((a, b) => {
    //     if (a.date < b.date) {
    //         return -1;
    //     }
    //     if (a.date > b.date) {
    //         return 1;
    //     }
    //     return 0;
    // });
    // console.log('dates', dates);

    const dates = item.map(({ date }) => date);

    // TODO: Fix date to human readable format
    const subtitle = {
        text: `${firstItem(dates)} - ${lastItem(dates)} `,
        align: 'right',
    };

    return { xAxis, series, yAxis, title, subtitle };
};

export const createPieChartOptions = ({
    currency,
    item,
    lastSettlementDate,
    totalExpenses,
}: SalesAndExpenseByDateResponseData) => {
    const series: SeriesOptionsType[] = [
        {
            name: 'Expenses',
            type: 'pie',
            colorByPoint: true,
            tooltip: {
                followPointer: true,
            },
            data: item.map(({ type, amount }) => ({ name: type, y: amount })),
        },
    ];

    const title: TitleOptions = {
        text: 'Expenses & Refunds',
        align: 'left',
    };

    return { series, title };
};

export interface SaleByCustomer {
    id: number;
    account_id: number;
    doctype: number;
    owner?: number;
    company: string;
    issue_date: Date;
    total: number;
    currency_id?: string;
    docDetailes:[{
            name: string;
            iItem: number;
            iTotal: number;
            qty: number;
        }
    ],
}

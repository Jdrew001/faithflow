export interface ActivityLogList {
    action: string;
    relatedTo: string; //Member related to
    performedBy: string; //Admin who performed the action
    timestamp: Date;
    icon: string;
    color: string;
}
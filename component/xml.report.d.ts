export type XmlReport = {
  control: {
    title: string;
    dateTime: string;
    status: '通常' | '訓練' | '試験';
    editorialOffice: string;
    publishingOffice: string;
  };
  head: {
    title: string;
    reportDateTime: string;
    targetDateTime: string;
    targetDateTimeDubious?: string;
    targetDuration?: string;
    validDateTime?: string;
    eventId: string | null;
    serial: string | null;
    infoType: '通常' | '取消' | '訂正' | '遅延';
    infoKind: string;
    infoKindVersion: string;
    headline: string | null;
  };
};

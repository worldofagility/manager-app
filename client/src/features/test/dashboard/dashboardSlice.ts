import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Checklist, Module } from 'models';

export interface DashboardStatistics {
  moduleCount: number;
  checklistCount: number;
  testcaseCount: number;
  issueCount: number;
}

export interface DashboardState {
  loading: boolean;
  statistics: DashboardStatistics;
  highlestIssueChecklistList: Checklist[];
  highlestIssueModuleList: Module[];
}

const initialState: DashboardState = {
  loading: false,
  statistics: {
    moduleCount: 0,
    checklistCount: 0,
    testcaseCount: 0,
    issueCount: 0,
  },
  highlestIssueChecklistList: [],
  highlestIssueModuleList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataSuccess(state) {
      state.loading = false;
    },
    fetchDataFailure(state) {
      state.loading = false;
    },

    setStatistics(state, action: PayloadAction<DashboardStatistics>) {
      state.statistics = action.payload;
    },
    setHighlestIssueChecklistList(state, action: PayloadAction<Checklist[]>) {
      state.highlestIssueChecklistList = action.payload;
    },

    setHighlestIssueModuleList(state, action: PayloadAction<Module[]>) {
      state.highlestIssueModuleList = action.payload;
    },
  },
});

// actions
export const dashboardActions = dashboardSlice.actions;

// selectors
export const dashboardLoaddingSelector = (state: RootState) => state.dashboard.loading;
export const dashboardStatisticsSelector = (state: RootState) => state.dashboard.statistics;
export const dashboardHighlestIssueChecklistListSelector = (state: RootState) =>
  state.dashboard.highlestIssueChecklistList;
export const dashboardHighlestIssueModuleSelector = (state: RootState) =>
  state.dashboard.highlestIssueModuleList;

// reducers
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;

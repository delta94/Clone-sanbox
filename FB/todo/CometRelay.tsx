__d("CometRelay", ["CometRelayQueryProfiler", "RelayFBCometMutations", "RelayFBEnvironmentActorID", "RelayFBMatchContainer", "RelayFBModuleResource", "RelayFBSubscription", "configureRelayForWWW", "createSuspenseFragmentContainer_DEPRECATED", "createSuspensePaginationContainer_DEPRECATED", "createSuspenseQueryRenderer_DEPRECATED", "enqueueMutation", "isRelayFBLocalEnvironment", "react", "react-relay/relay-hooks/EntryPointContainer.react", "react-relay/relay-hooks/ProfilerContext", "react-relay/relay-hooks/RelayEnvironmentProvider", "react-relay/relay-hooks/loadEntryPoint", "react-relay/relay-hooks/loadQuery", "react-relay/relay-hooks/useBlockingPaginationFragment", "react-relay/relay-hooks/useEntryPointLoader", "react-relay/relay-hooks/useFragment", "react-relay/relay-hooks/useIsParentQueryActive", "react-relay/relay-hooks/useLazyLoadQuery", "react-relay/relay-hooks/usePaginationFragment", "react-relay/relay-hooks/usePreloadedQuery", "react-relay/relay-hooks/useQueryLoader", "react-relay/relay-hooks/useRefetchableFragment", "react-relay/relay-hooks/useRelayEnvironment", "react-relay/relay-hooks/useSubscribeToInvalidationState", "relay-runtime", "useFBMutation", "useFBSubscription"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = c("RelayFBSubscription").addFBisms(d("relay-runtime").requestSubscription);
    c("configureRelayForWWW")();
    d("CometRelayQueryProfiler").install();
    f.exports = {
        ConnectionHandler: d("relay-runtime").ConnectionHandler,
        EntryPointContainer: c("react-relay/relay-hooks/EntryPointContainer.react"),
        MatchContainer: c("RelayFBMatchContainer"),
        ModuleResource: {
            getModuleId: d("RelayFBModuleResource").getModuleId,
            read: d("RelayFBModuleResource").read,
            readAll: d("RelayFBModuleResource").readAll
        },
        MutationTypes: d("relay-runtime").MutationTypes,
        ProfilerContext: c("react-relay/relay-hooks/ProfilerContext"),
        RangeOperations: d("relay-runtime").RangeOperations,
        RelayEnvironmentProvider: c("react-relay/relay-hooks/RelayEnvironmentProvider"),
        RelayFeatureFlags: d("relay-runtime").RelayFeatureFlags,
        VIEWER_ID: d("relay-runtime").VIEWER_ID,
        applyOptimisticMutation: d("relay-runtime").applyOptimisticMutation,
        commitLocalUpdate: d("relay-runtime").commitLocalUpdate,
        commitMutation: d("RelayFBCometMutations").addFBisms(d("relay-runtime").commitMutation),
        createPayloadFor3DField: d("relay-runtime").createPayloadFor3DField,
        createSuspenseFragmentContainer_DEPRECATED: c("createSuspenseFragmentContainer_DEPRECATED"),
        createSuspensePaginationContainer_DEPRECATED: c("createSuspensePaginationContainer_DEPRECATED"),
        createSuspenseQueryRenderer_DEPRECATED: c("createSuspenseQueryRenderer_DEPRECATED"),
        enqueueMutation: d("RelayFBCometMutations").addFBisms(d("enqueueMutation").enqueueMutation),
        fetchQuery: d("relay-runtime").fetchQuery,
        generateUniqueClientID: d("relay-runtime").generateUniqueClientID,
        getActorID: d("RelayFBEnvironmentActorID").getActorID,
        graphql: d("relay-runtime").graphql,
        isLocalEnvironment: c("isRelayFBLocalEnvironment"),
        loadEntryPoint: c("react-relay/relay-hooks/loadEntryPoint"),
        loadQuery: d("react-relay/relay-hooks/loadQuery").loadQuery,
        readInlineData: d("relay-runtime").readInlineData,
        requestSubscription: a,
        useBlockingPaginationFragment: c("react-relay/relay-hooks/useBlockingPaginationFragment"),
        useEntryPointLoader: c("react-relay/relay-hooks/useEntryPointLoader"),
        useFragment: c("react-relay/relay-hooks/useFragment"),
        useIsParentQueryActive: c("react-relay/relay-hooks/useIsParentQueryActive"),
        useLazyLoadQuery: c("react-relay/relay-hooks/useLazyLoadQuery"),
        useMutation: c("useFBMutation"),
        usePaginationFragment: c("react-relay/relay-hooks/usePaginationFragment"),
        usePreloadedQuery: c("react-relay/relay-hooks/usePreloadedQuery"),
        useQueryLoader: c("react-relay/relay-hooks/useQueryLoader"),
        useRefetchableFragment: c("react-relay/relay-hooks/useRefetchableFragment"),
        useRelayEnvironment: function() {
            return c("react-relay/relay-hooks/useRelayEnvironment")()
        },
        useSubscribeToInvalidationState: c("react-relay/relay-hooks/useSubscribeToInvalidationState"),
        useSubscription: c("useFBSubscription")
    }
}
), 34);


import React from 'react';
import { requestSubscription as relayRequestSubscription, ConnectionHandler, MutationTypes, RangeOperations, RelayFeatureFlags, VIEWER_ID, applyOptimisticMutation, commitLocalUpdate, commitMutation as relayCommitMutation, createPayloadFor3DField, fetchQuery, generateUniqueClientID, graphql, readInlineData } from 'relay-runtime';
import { addFBisms as addFBismsToMutation } from 'RelayFBCometMutations';
import { configureRelayForWWW } from 'configureRelayForWWW';
import { install as installCometRelayQueryProfiler } from 'CometRelayQueryProfiler';
import RelayFBMatchContainer from 'RelayFBMatchContainer';
import * as RelayFBModuleResource from 'RelayFBModuleResource';
import { addFBisms as addFBismsToSubscription } from 'RelayFBSubscription';
import { EntryPointContainer } from 'react-relay/relay-hooks/EntryPointContainer.react';
import { ProfilerContext } from 'react-relay/relay-hooks/ProfilerContext';
import { RelayEnvironmentProvider } from 'react-relay/relay-hooks/RelayEnvironmentProvider';
import { loadEntryPoint } from 'react-relay/relay-hooks/loadEntryPoint';
import { loadQuery } from 'react-relay/relay-hooks/loadQuery';
import useBlockingPaginationFragment from 'react-relay/relay-hooks/useBlockingPaginationFragment';
import useEntryPointLoader from 'react-relay/relay-hooks/useEntryPointLoader';
import useFragment from 'react-relay/relay-hooks/useFragment';
import useIsParentQueryActive from 'react-relay/relay-hooks/useIsParentQueryActive';
import useLazyLoadQuery from 'react-relay/relay-hooks/useLazyLoadQuery';
import useMutation from 'useFBMutation';
import usePaginationFragment from 'react-relay/relay-hooks/usePaginationFragment';
import usePreloadedQuery from 'react-relay/relay-hooks/usePreloadedQuery';
import useQueryLoader from 'react-relay/relay-hooks/useQueryLoader';
import useRefetchableFragment from 'react-relay/relay-hooks/useRefetchableFragment';
import useRelayEnvironment from 'react-relay/relay-hooks/useRelayEnvironment';
import useSubscribeToInvalidationState from 'react-relay/relay-hooks/useSubscribeToInvalidationState';
import useSubscription from 'useFBSubscription';
import { getActorID } from 'RelayFBEnvironmentActorID';
import { isLocalEnvironment } from 'isRelayFBLocalEnvironment';
import { enqueueMutation as relayEnqueueMutation } from 'enqueueMutation';

configureRelayForWWW();
installCometRelayQueryProfiler();

const requestSubscription = addFBismsToSubscription(relayRequestSubscription);
const commitMutation = addFBismsToMutation(relayCommitMutation);
const enqueueMutation = addFBismsToMutation(relayEnqueueMutation);

export {
    ConnectionHandler,
    EntryPointContainer,
    RelayFBMatchContainer as MatchContainer,
    RelayFBModuleResource,
    MutationTypes,
    ProfilerContext,
    RangeOperations,
    RelayEnvironmentProvider,
    RelayFeatureFlags,
    VIEWER_ID,
    applyOptimisticMutation,
    commitLocalUpdate,
    commitMutation,
    createPayloadFor3DField,
    fetchQuery,
    generateUniqueClientID,
    getActorID,
    graphql,
    isLocalEnvironment,
    loadEntryPoint,
    loadQuery,
    readInlineData,
    requestSubscription,
    useBlockingPaginationFragment,
    useEntryPointLoader,
    useFragment,
    useIsParentQueryActive,
    useLazyLoadQuery,
    useMutation,
    usePaginationFragment,
    usePreloadedQuery,
    useQueryLoader,
    useRefetchableFragment,
    useRelayEnvironment,
    useSubscribeToInvalidationState,
    useSubscription,
    enqueueMutation
};

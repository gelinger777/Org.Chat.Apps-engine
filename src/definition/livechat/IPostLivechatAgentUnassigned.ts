import { IHttp, IPersistence, IRead } from '../accessors';
import { AppMethod } from '../metadata';
import { ILivechatEventContext } from './ILivechatEventContext';

/**
 * Handler called after the unassignment of a livechat agent.
 */
export interface IPostLivechatAgentUnassigned {
    /**
     * Handler called *after* the unassignment of a livechat agent.
     *
     * @param data the livechat context data which contains agent's info and room's info.
     * @param read An accessor to the environment
     * @param http An accessor to the outside world
     * @param persistence An accessor to the App's persistence
     */
    [AppMethod.EXECUTE_POST_LIVECHAT_AGENT_UNASSIGNED](context: ILivechatEventContext, read: IRead, http: IHttp, persistence: IPersistence): Promise<void>;
}